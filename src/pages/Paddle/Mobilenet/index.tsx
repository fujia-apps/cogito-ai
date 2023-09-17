import * as mobilenet from '@paddlejs-models/mobilenet';
import { Button, Upload, UploadFile, UploadProps, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import map from './data/map.json';
import { RcFile } from 'antd/es/upload';
let startTime = 0;
let endTime = 0;

export const MobilenetComp = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const loadModelAndInitSDK = async () => {
    const path = 'https://paddlejs.bj.bcebos.com/models/fuse/mobilenet/mobileNetV2_fuse_activation';
    await mobilenet.load({
      path,
      mean: [0.485, 0.456, 0.406],
      std: [0.229, 0.224, 0.225]
    }, map);
  }

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as RcFile);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const handleClassify = async () => {
    try {
      const res = await mobilenet.classify(fileList[0]);

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadModelAndInitSDK();
  }, []);


  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <div>
      <div>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
      <div>
        <Button onClick={handleClassify}>Get Result</Button>
      </div>
      <div>
        <p>Elapsed Time: </p>
        <p>Predicted Result: </p>
      </div>
    </div>
  )
};