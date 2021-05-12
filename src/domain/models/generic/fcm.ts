/* eslint-disable semi */
/* eslint-disable camelcase */
export default interface FcmData {
  to?: string;
  registration_ids?: string[];
  notification: {
    body: string;
    title: string;
    click_action: 'FLUTTER_NOTIFICATION_CLICK';
  };
  data: {
    type: string;
    content: any;
    priority: 'high';
  };
}
