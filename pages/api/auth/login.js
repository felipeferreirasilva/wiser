const users = [
  {
    id: "1",
    createdAt: "2021-02-18T19:04:04.225Z",
    name: "Roberta Kulas IV",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg",
    username: "Cali58@yahoo.com",
    password: "WCj6TIQxWBXmEn3",
  },
  {
    id: "2",
    createdAt: "2021-02-18T16:30:24.656Z",
    name: "Miss Hollie Zboncak",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/lanceguyatt/128.jpg",
    username: "Frederik_Rippin@gmail.com",
    password: "a32o96I6LHQiVmW",
  },
  {
    id: "3",
    createdAt: "2021-02-17T20:20:12.173Z",
    name: "Alec Sporer",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/artvavs/128.jpg",
    username: "Kattie.Cruickshank20@hotmail.com",
    password: "O3VlfifKwVAVEc4",
  },
  {
    id: "4",
    createdAt: "2021-02-18T02:13:07.938Z",
    name: "Bert Hyatt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg",
    username: "Jules_Gibson@yahoo.com",
    password: "2J38IbtnXEAAVH3",
  },
  {
    id: "5",
    createdAt: "2021-02-18T17:07:14.013Z",
    name: "Dewitt MacGyver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg",
    username: "Sidney.Runolfsdottir94@yahoo.com",
    password: "3J8lxjknRh3v9va",
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
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: "Usuário ou senha inválidos" });
    }
  }
};
