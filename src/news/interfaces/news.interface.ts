interface INews {
  id: string;
  created_at: Date;
  category_id: string;
  tag_id: string;
  title: string;
  description: Object;
  images: Object;
  views: number;
  telegram: string;
  twitter: string;
  facebook: string;
  subcategory_id: string;
}
