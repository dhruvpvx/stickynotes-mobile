// add a class using ts syntax

import AsyncStorage from '@react-native-async-storage/async-storage';

const TEXT = 'textNotes';
const VOICE = 'voiceNotes';
const IMAGE = 'imageNotes';

class Utility {
  // get texts notes from asyn storage
  static async getNotes(type: string) {
    try {
      const notes: any = await AsyncStorage.getItem(type);
      if (notes !== null) {
        return JSON.parse(notes);
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }

  // save notes to async storage
  static async saveNotes(type: string, notes: any) {
    try {
      await AsyncStorage.setItem(type, JSON.stringify(notes));
    } catch (error) {
      console.log(error);
    }
  }

  static async saveTextNotes(notes: any) {
    await this.saveNotes(TEXT, notes);
  }

  static async saveImageNotes(notes: any) {
    await this.saveNotes(IMAGE, notes);
  }

  static async saveVoiceNotes(notes: any) {
    await this.saveNotes(VOICE, notes);
  }

  static async getTextNotes() {
    return await this.getNotes(TEXT);
  }

  static async getImageNotes() {
    return await this.getNotes(IMAGE);
  }

  static async getVoiceNotes() {
    return await this.getNotes(VOICE);
  }
}
export default Utility;
