export interface Event {
    // Event title
    title: string;
    // Event description
    description: string;
    // Event host
    host: string;
    // Event date
    date: Date;
    // Event type
    type: string;
    // Event tags
    tags?: string[];
    // Selected flag
    selected: boolean;
}