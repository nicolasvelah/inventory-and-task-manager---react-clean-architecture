/* eslint-disable semi */
export default interface INotification {
  id: number;
  title: string; // notification title
  description: string; // notification description max 150 characters
  type: string; // notification type (example: NEW_LEAD, NEW_EVENT,ect)
  content: any; // could be string, bool, number or a json
  createdAt: Date;
  viewed: boolean;
}
