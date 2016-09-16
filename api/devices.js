import Syncano from 'syncano';
import _ from 'lodash';

const connection = Syncano({
    apiKey: '<YOUR_API_KEY>',
    defaults: {
      instanceName: '<YOUR_INSTANCE_NAME>'
  }
});

const { GCMDevice, APNSDevice } = connection;

module.exports = {

  addDevice: ({ token, os }) => {
    const device = {
      label:"DEVICE_NAME",
      registration_id: token
    };
    console.log(os);

    os === 'android' && GCMDevice.please().list().then((devices) => {
      console.log('Android Devices::', devices);
      const isDevice = _.find(devices, { registration_id: token });

      !isDevice && GCMDevice.please().create(device).then((device) => {
        console.log('Android Device::', device);
      });
    });

    os === 'ios' && APNSDevice.please().list().then((devices) => {
      console.log('iOS Devices::', devices);
      const isDevice = _.find(devices, { registration_id: token });

      !isDevice && APNSDevice.please().create(device).then((device) => {
        console.log('iOS Device::', device);
      });
    });
  }

}
