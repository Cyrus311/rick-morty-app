import React from "react";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { ITitlebarImageListProps } from "./types";

export default function TitlebarImageList(props: ITitlebarImageListProps) {
  const navigate = useNavigate();

  return (
    <ImageList sx={{ maxWidth: 960 }} cols={4}>
      {props.data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name ?? "Image"}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={`${item.species} - ${item.status}`}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.name}`}
                onClick={() => {
                  return navigate("/detail", {
                    state: {
                      characterId: item.id
                    }
                  });
                }}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
