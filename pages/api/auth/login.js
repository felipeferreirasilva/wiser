const users = [
  {
    id: "1",
    createdAt: "2021-02-18T19:04:04.225Z",
    firstName: "Felipe",
    lastName: "Silva",
    avatar: "https://avatars.dicebear.com/4.5/api/avataaars/felip.svg",
    username: "felipe@gmail.com",
    password: "123456",
  },
  {
    id: "2",
    createdAt: "2021-02-18T16:30:24.656Z",
    firstName: "Flavia",
    lastName: "Ferreira",
    avatar: "https://avatars.dicebear.com/4.5/api/avataaars/Hollie.svg",
    username: "flavia@gmail.com",
    password: "123456",
  },
  {
    id: "3",
    createdAt: "2021-02-17T20:20:12.173Z",
    firstName: "Arthur",
    lastName: "Gonçalves",
    avatar: "https://avatars.dicebear.com/4.5/api/avataaars/alex23.svg",
    username: "arthur@gmail.com",
    password: "123456",
  },
];

export default (req, res) => {
  if (req.method === "POST") {
    const userData = { ...req.body };

    const user = users.find(
      (users) =>
        users.username === userData.username &&
        users.password === userData.password
    );

    if (user != undefined) {
      res.status(200).json({ ...user });
    } else {
      res.status(400).json({ error: "Usuário ou senha inválidos" });
    }
  }
};
