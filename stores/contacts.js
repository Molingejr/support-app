export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: [
      {
        id: 1,
        name: "Chinedu",
        phone: "0803 997 3902"
      },
      {
        id: 2,
        name: "Tope",
        phone: "0818 424 6512"
      },
      {
        id: 3,
        name: "Mohammed",
        phone: "0807 971 7958"
      },
      {
        id: 4,
        name: "Benita",
        phone: "0907 886 7093"
      }
    ]
  })
})
