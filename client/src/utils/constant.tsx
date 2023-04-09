import { ethers } from 'ethers';

export const formInitialValue = {
  title: '',
  description: '',
  image: ``,
  category: '',
  date: ``,
};

export const formDataInitialValue = {
  address: '',
  name: '',
  username: '',
  email: '',
  password: '',
};

export const loginDefaultValue = {
  address: '',
  username: '',
  password: '',
}


export const userDataDefault = {
  address: '',
  username: '',
  name: '',
  token: '',
  email: '',
  profile: '',
}

export const AssetsDisplayDefault = {
  owner: '',
  amountAppreciated: ethers.BigNumber.from(0),
  appreciation: [],
  appreciators: [],
  title: '',
  description: '',
  image: '',
  category: '',
  date: '',
  _id: 0,
};