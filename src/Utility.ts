import AsyncStorage from '@react-native-async-storage/async-storage';

class Utility {
  static async getNotes() {
    try {
      const notes: any = await AsyncStorage.getItem('notes');
      if (notes !== null) {
        return JSON.parse(notes);
      } else {
        return [
          {
            id: 1,
            title: 'Welcome to Notes App',
            content: 'This is a sample note. You can edit or delete it.',
            type: 'text',
            label: 'Personal',
            media_url: '',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            isEdited: false,
          },
        ];
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
