var minioClient = new Minio.Client({
    endPoint: "api.gr-oops.com",
    port: 443,
    useSSL: true,
    accessKey: "LcqhcfSNAW8XMSji",
    secretKey: "LFnne47pYrmYaPtki35uyrC9mO8u19um",
  });
  
  module.exports.minioClient = minioClient;