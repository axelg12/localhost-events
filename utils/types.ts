export type Event = {
  id: string;
  title: string;
  description: string | null;
  url?: string;
  data: {
    start: string | null;
    end: string | null;
  };
};
