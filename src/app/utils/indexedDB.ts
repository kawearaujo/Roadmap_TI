// import { useUserStore } from "@/app/store/useUserStore"

export interface UserData {
  id: string;
  name: string;
  photo: string;
  welcomeSeen?: boolean;
  level: number;
  experience: number;
  area: string;
  achievements: number[];
  roadmap: string[];
}

export interface UserDataBackup {
  format: "roadmap-ti-user-data";
  version: 1;
  data: UserData;
}

function isUserData(value: unknown): value is UserData {
  if (!value || typeof value !== "object") {
    return false;
  }

  const data = value as Partial<UserData>;
  return data.id === "user1"
    && typeof data.name === "string"
    && typeof data.photo === "string"
    && (data.welcomeSeen === undefined || typeof data.welcomeSeen === "boolean")
    && typeof data.level === "number"
    && Number.isFinite(data.level)
    && typeof data.experience === "number"
    && Number.isFinite(data.experience)
    && typeof data.area === "string"
    && Array.isArray(data.achievements)
    && data.achievements.every((achievement) => typeof achievement === "number" && Number.isFinite(achievement))
    && Array.isArray(data.roadmap)
    && data.roadmap.every((step) => typeof step === "string");
}

export function parseUserDataBackup(value: unknown): UserData | null {
  if (isUserData(value)) {
    return value;
  }

  if (!value || typeof value !== "object") {
    return null;
  }

  const backup = value as Partial<UserDataBackup>;
  if (backup.format !== "roadmap-ti-user-data" || backup.version !== 1) {
    return null;
  }

  return isUserData(backup.data) ? backup.data : null;
}

class UserDataStore {
  private dbName = "userDatabase";
  private storeName = "userData";

  openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: "id" });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject("Failed to open the database");
      };
    });
  }

  async getUserData(): Promise<UserData | null> {
    // console.log("Buscando dados do usuário...");
    const db = await this.openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.get("user1"); // ID fixo 'user1'

      request.onsuccess = () => {
        // console.log("Dados encontrados:", request.result);
        resolve(request.result || null);
      };

      request.onerror = () => {
        // console.error("Erro ao buscar os dados no IndexedDB");
        reject("Failed to fetch user data");
      };
    });
  }

  async exportUserData(): Promise<UserDataBackup | null> {
    const userData = await this.getUserData();
    if (!userData) {
      return null;
    }

    return {
      format: "roadmap-ti-user-data",
      version: 1,
      data: userData,
    };
  }

  async saveUserData(userData: UserData): Promise<void> {
    // console.log("Salvando dados no IndexedDB:", userData);
    if (userData.experience){
      userData.level = Math.trunc(userData.experience/100);
      
    }
    const db = await this.openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.put(userData);

      request.onsuccess = () => {
        // console.log("Dados salvos com sucesso!");
        resolve();
      };

      request.onerror = () => {
        console.error("Erro ao salvar os dados no IndexedDB");
        reject("Failed to save user data");
      };
    });
  }

  /** 🔹 Função para salvar um atributo individualmente */

  async saveUserAttribute<T extends keyof UserData>(attribute: T, value: UserData[T]): Promise<void> {
    
    const userData = await this.getUserData(); // Pega os dados atuais do usuário
    
    if (!userData) {
      console.warn("Nenhum dado encontrado, criando novo usuário...");
      return this.saveUserData({ id: "user1", name: "", photo: "", welcomeSeen: false, level: 0, experience: 0, area: "", achievements:[],roadmap:[], [attribute]: value });
    }
    
    userData[attribute] = value; // Atualiza apenas o atributo específico
    // this.saveUserData({ id: "user1", name: "" , photo: "a", level: 0, experience: 0, area: "a", achievements:[] });
    // console.log("Foi atualizado ",value)
    // return this.saveUserData({ id: "user1", name: "", photo: "", level: 0, experience: 0, area: "", achievements:[],roadmap:[], [attribute]: value });
    return (this.saveUserData(userData)); // Salva os dados atualizados
    // this.saveUserData({ id: "user1", name: "a", photo: "", level: 0, experience: 0, area: "", achievements:[],roadmap:[], [attribute]: value });


  }

  async clearUserData(): Promise<void> {
  const db = await this.openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(this.storeName, "readwrite");
    const store = transaction.objectStore(this.storeName);
    const request = store.clear();

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      console.error("Erro ao limpar os dados no IndexedDB");
      reject("Failed to clear user data");
    };
  });
}
}

export const userDataStore = new UserDataStore();
