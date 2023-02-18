import { UserType } from './types';
import bretHartPic from '../assets/images/clientPhotos/brethart.jpg';
import ricFlairPic from '../assets/images/clientPhotos/ricflair.jpeg';
import randySavagePic from '../assets/images/clientPhotos/randysavage.jpg';
import hulkHoganPic from '../assets/images/clientPhotos/hulkhogan.jpeg';
import shawnMichaelsPic from '../assets/images/clientPhotos/shawnmichaels.jpg';

export let DUMMY_DATA: UserType[] = [
  {
    role: 'TRAINER',
    info: {
      id: 'kcereno89',
      firstName: 'Karl',
      lastName: 'Cereno',
      email: 'trainer@gmail.com',
      birthday: new Date(1989, 0o4, 18),
      password: 'password',
      profilePicture:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  },
  {
    role: 'CLIENT',
    info: {
      id: 'rflair',
      firstName: 'Ric',
      lastName: 'Flair',
      birthday: new Date(1989, 11, 31),
      email: 'client@gmail.com',
      password: 'password',
      profilePicture: ricFlairPic,
    },
    trainingPlan: {
      trainer: 'kcereno89',
      goal: 'Gain strength',
      program: [
        { name: 'Bench Press', weight: 225, reps: 10, sets: 4 },
        { name: 'Deadlift', weight: 315, reps: 5, sets: 4 },
      ],
      history: [
        {
          date: new Date(2022, 8, 1),
          data: [
            {
              exercise: 'Bench Press',
              sets: [
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
              ],
            },
            {
              exercise: 'Deadlift',
              sets: [
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
              ],
            },
          ],
        },
        {
          date: new Date(2022, 8, 8),
          data: [
            {
              exercise: 'Bench Press',
              sets: [
                { weight: 100, reps: 8 },
                { weight: 200, reps: 8 },
                { weight: 300, reps: 8 },
              ],
            },
            {
              exercise: 'Deadlift',
              sets: [
                { weight: 315, reps: 8 },
                { weight: 325, reps: 8 },
                { weight: 250, reps: 8 },
              ],
            },
          ],
        },
      ],
      notes: 'This is Ric Flairs notes',
    },
  },
  {
    role: 'CLIENT',
    info: {
      id: 'bhart',
      firstName: 'Bret',
      lastName: 'Hart',
      birthday: new Date(1989, 11, 31),
      email: 'client2@gmail.com',
      password: 'password',
      profilePicture: bretHartPic,
    },
    trainingPlan: {
      trainer: 'kcereno89',
      goal: 'Build muscle',
      program: [],
      history: [],
    },
  },
  {
    role: 'CLIENT',
    info: {
      id: 'rsavage',
      firstName: 'Randy',
      lastName: 'Savage',
      birthday: new Date(1989, 11, 31),
      email: 'client3@gmail.com',
      password: 'password',
      profilePicture: randySavagePic,
    },
    trainingPlan: {
      trainer: 'kcereno89',
      goal: 'Lose fat',
      program: [],
      history: [],
    },
  },
  {
    role: 'CLIENT',
    info: {
      id: 'smichaels',
      firstName: 'Shawn',
      lastName: 'Michaels',
      birthday: new Date(1989, 11, 31),
      email: 'client4@gmail.com',
      password: 'password',
      profilePicture: shawnMichaelsPic,
    },
    trainingPlan: {
      trainer: 'kcereno89',
      goal: 'Body recomposition',
      program: [],
      history: [],
    },
  },
  {
    role: 'CLIENT',
    info: {
      id: 'hhogan',
      firstName: 'Hulk',
      lastName: 'Hogan',
      birthday: new Date(1989, 11, 31),
      email: 'client5@gmail.com',
      password: 'password',
      profilePicture: hulkHoganPic,
    },
    trainingPlan: {
      trainer: 'kcereno89',
      goal: 'Sports specific',
      program: [],
      history: [],
    },
  },
];
