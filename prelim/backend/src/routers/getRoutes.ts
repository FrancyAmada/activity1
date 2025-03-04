import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const content = {
    employees: [
      {
        id: "0",
        name: "John Doe",
        role: "Senior",
        salary: 80000,
      },
      {
        id: "1",
        name: "Jane Doe",
        role: "Senior",
        salary: 68000,
      },
      {
        id: "2",
        name: "Papa Doe",
        role: "Junior",
        salary: 30000,
      },
      {
        id: "3",
        name: "Mama Doe",
        role: "Senior",
        salary: 90000,
      },
      {
        id: "4",
        name: "Peppa Doe",
        role: "Senior",
        salary: 120000,
      },
      {
        id: "5",
        name: "Mi Doe",
        role: "Junior",
        salary: 12000,
      },
      {
        id: "6",
        name: "Pa Doe",
        role: "Junior",
        salary: 20000,
      },
    ],
  };
  res.send(content);
});

export default router;
