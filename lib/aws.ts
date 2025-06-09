import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_SECRET_ACCESS_KEY!,
  },
});

const putObjectUrl = async (
  userId: string,
  creativeId: string,
  contentType: string
) => {
  const command = new PutObjectCommand({
    Bucket: "adhacks-private",
    Key: `${userId}/creatives/${creativeId}.png`,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
};

const getObjectUrl = async (userId: string, creativeId: string) => {
  const command = new GetObjectCommand({
    Bucket: "adhacks-private",
    Key: `${userId}/creatives/${creativeId}.png`,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 20 });
  return url;
};

export { putObjectUrl, getObjectUrl };
