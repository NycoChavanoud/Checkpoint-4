import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons({
  onFileUploaded,
  color,
  sx,
  accept,
  content,
  id,
}) {
  const uploadFileOnAPI = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/files`, data)
      .then(({ data }) => {
        if (typeof onFileUploaded === "function") onFileUploaded(data.path);
      })
      .catch((err) => {
        console.log(err);
        alert("file can't be uploaded");
      });
  };

  const handleFileUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    uploadFileOnAPI(data);
  };

  return (
    <FormControl action="/profile" method="post" encType="multipart/form-data">
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor={id}>
          <Input
            accept={accept}
            id={id}
            // id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileUpload}
          />
          <Button color={color} sx={sx} variant="contained" component="span">
            {content}
          </Button>
        </label>
      </Stack>
    </FormControl>
  );
}
