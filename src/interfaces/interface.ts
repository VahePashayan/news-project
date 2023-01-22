export interface INews {
  createdAt: string;
  name: string;
  views: string;
  image: string;
  author: string;
  text: string;
  id: string;
}

export interface IComments {
  createdAt: string;
  text: string;
  avatar: string;
  author: string;
  id: string;
  newsId: string;
}
