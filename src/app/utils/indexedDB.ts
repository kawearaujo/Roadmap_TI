export interface UserData {
    id: string;
    name: string;
    photo: string;
    level: number;
    experience: number;
  }
  
  class UserDataStore {
    private dbName = 'userDatabase';
    private storeName = 'userData';
  
    openDatabase(): Promise<IDBDatabase> {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, 1);
  
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: 'id' });
          }
        };
  
        request.onsuccess = () => {
          resolve(request.result);
        };
  
        request.onerror = () => {
          reject('Failed to open the database');
        };
      });
    }
  
    async getUserData(): Promise<UserData | null> {
        console.log("Buscando dados do usuário...");
      const db = await this.openDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(this.storeName, 'readonly');
        const store = transaction.objectStore(this.storeName);
        const request = store.get('user1'); // Assumindo que o ID do usuário é 'user1'
  
        request.onsuccess = () => {
            console.log("Dados encontrados:", request.result);
          resolve(request.result || null);
        };
  
        request.onerror = () => {
            console.error("Erro ao buscar os dados no IndexedDB");
          reject('Failed to fetch user data');
        };
      });
    }
  

    async saveUserData(userData: UserData): Promise<void> {
        console.log("Salvando dados no IndexedDB:", userData);
      const db = await this.openDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(this.storeName, 'readwrite');
        const store = transaction.objectStore(this.storeName);
        const request = store.put(userData); // Coloca ou atualiza os dados do usuário
  
        request.onsuccess = () => {
            console.log("Dados salvos com sucesso!");
          resolve();
        };
  
        request.onerror = () => {
            console.error("Erro ao salvar os dados no IndexedDB");
          reject('Failed to save user data');
        };
      });
    }
  }
  
  export const userDataStore = new UserDataStore();