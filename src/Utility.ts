import AsyncStorage from '@react-native-async-storage/async-storage';

class Utility {
  static async getNotes() {
    try {
      const notes: any = await AsyncStorage.getItem('notes');
      if (notes !== null) {
        return JSON.parse(notes);
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async saveNotes(notes: any) {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
      console.log(error);
    }
  }
}
export default Utility;
