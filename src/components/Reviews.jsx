import React from "react";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@mui/material";

const revs = [
  {
    avatar: "",
    name: "Іван Іванов",
    text: "Найкращий сервіс та перевізник. Рекомендую 👍"
  },
  {
    name: "Андрій Андрієнко",
    text: "Перевозив офіс. Скористався RedRayTrucking. Був вражений сервісом. Швидко, надійно, вчасно. А головне гарна ціна"
  },
  {
    name: "Петро Петров",
    text: "Для мене переїзд - це завжди клопіт. Звернувся до RedRayTrucking. Тепер переїзд для - справа одного дзвінка"
  },
  {
    name: "Сергій Сергієнко",
    text: "Про компанію RedRayTrucking у Києві дізнався від друзів, які вже користувались їхніми послугами. Здивувало, що дуже хороші ціни і професійні працівники. Залишились задоволені якістю роботи та ціновою політикою. Зараз працюємо на постійній основі, доставляють з магазину меблі клієнтам. Раджу звернутись, не пошкодуєте!"
  }
];

export default function Reviews() {
  return (
    <Container
      maxWidth="lg"
      sx={{ padding: "40px 0", backgroundColor: "#f8f9fa" }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "30px",
          textAlign: "center",
          fontSize: { xs: "1.8em", sm: "2em" },
          fontStyle: "italic",
          textShadow: "2px 3px 3px #000",
          color: "red"
        }}
      >
        Відгуки
      </Typography>

      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2vw"
        }}
      >
        {revs.map((r, i) => (
          <ListItem
            alignItems="flex-start"
            sx={{ width: { xs: "90%", md: "45%" } }}
            key={i}
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={`https://avatars.dicebear.com/api/avataaars/${r.name}.svg`}
                sx={{ width: "65px", height: "65px", marginRight: "10px" }}
              />
            </ListItemAvatar>
            <Box>
              <Typography
                sx={{
                  display: "inline-block",
                  marginBottom: "5px",
                  fontSize: "1.1rem",
                  borderBottom: "1px solid red",
                  borderRadius: "20%"
                }}
              >
                {r.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontStyle: "italic"
                }}
              >
                " {r.text} "
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
