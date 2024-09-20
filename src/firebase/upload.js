import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
  try {
    const date = new Date().getTime();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");

    const storageRef = ref(storage, `images/${date}-${sanitizedFileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error("Failed to get download URL", error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error("Error during file upload", error);
    throw new Error("Upload failed");
  }
};

export default upload;
