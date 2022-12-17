import { SendNotification } from './send-notification';

describe('send notification', () => {
  it('Shold be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'exemple',
    });

    expect(notification).toBeTruthy();
  });
});
