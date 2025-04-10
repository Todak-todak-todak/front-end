import { create } from 'zustand';

interface Profile {
  name: string;
  idCard: string;
  phone: string;
  gender: string;
  industry: string;
  language: string;
}

interface ProfileStore {
  profile: Profile;
  isEdit: boolean;
  toggleEdit: () => void;
  updateProfile: (updates: Partial<Profile>) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {
    name: 'Nguyen Tat Thanh',
    idCard: '000402-3000000',
    phone: '010-1234-4321',
    gender: '남자',
    industry: '건설업',
    language: 'Tiếng Việt',
  },
  isEdit: false,
  toggleEdit: () => set((state) => ({ isEdit: !state.isEdit })),
  updateProfile: (updates) =>
    set((state) => ({ profile: { ...state.profile, ...updates } })),
}));
