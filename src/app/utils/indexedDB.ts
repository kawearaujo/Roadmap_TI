export interface UserData {
  id: string;
  name: string;
  photo: string;
  level: number;
  experience: number;
  area: string;
  achievements: number[];
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
    console.log("Buscando dados do usuário...");
    const db = await this.openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.get("user1"); // ID fixo 'user1'

      request.onsuccess = () => {
        console.log("Dados encontrados:", request.result);
        resolve(request.result || null);
      };

      request.onerror = () => {
        console.error("Erro ao buscar os dados no IndexedDB");
        reject("Failed to fetch user data");
      };
    });
  }

  async saveUserData(userData: UserData): Promise<void> {
    console.log("Salvando dados no IndexedDB:", userData);
    if (userData.experience){
      userData.level = Math.trunc(userData.experience/100);
      
    }
    const db = await this.openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.put(userData);

      request.onsuccess = () => {
        console.log("Dados salvos com sucesso!");
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
    this.saveUserData({ id: "user1", name: "", photo: "", level: 0, experience: 0, area: "", achievements:[] });
    if (!userData) {
      console.warn("Nenhum dado encontrado, criando novo usuário...");
      return this.saveUserData({ id: "user1", name: "", photo: "", level: 0, experience: 0, area: "", achievements:[], [attribute]: value });
    }

    userData[attribute] = value; // Atualiza apenas o atributo específico
    return this.saveUserData(userData); // Salva os dados atualizados
  }
}

export const userDataStore = new UserDataStore();
