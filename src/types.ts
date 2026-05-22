export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
  story: string; // The powerful narrative behind the image to fit the requirement "ellos pueden contar una historia a partir de una imagen"
  tags: string[];
}

export interface BackgroundImage {
  id: string;
  url: string;
  title: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  deliveredTo: string;
  status: string;
}
