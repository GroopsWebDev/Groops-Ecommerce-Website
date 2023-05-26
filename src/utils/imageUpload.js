import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const ImageUploader = async (file) => {
    console.log(file)
  const s3 = new S3Client({
    region: process.env.MINIO_REGION, // Replace with your Minio server's region
    endpoint: process.env.MINIO_ENDPOINT, // Replace with your Minio server's URL
    credentials: {
      accessKeyId: process.env.MINIO_ACCESS_KEY, // Replace with your Minio server's access key
      secretAccessKey: process.env.MINIO_SECRET_KEY, // Replace with your Minio server's secret access key
    },
    forcePathStyle: true,
    sslEnabled: false, // Replace with true if your Minio server uses HTTPS
  });

  const bucketName = "img"; // Replace with your Minio bucket name
  const fileName = file.name;
  const fileContent = file;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
  });

  try {
    await s3.send(command);
    console.log(`File uploaded: ${fileName}`);
    return fileName;
  } catch (err) {
    console.error(err);
  }
};
