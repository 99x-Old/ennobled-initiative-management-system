import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    year: '2019',
    initiatives: [
      {
        id: uuid(),
        name: "Azure",
        actions: [
          {
            id: uuid(),
            title: "Azure A1",
            name: "azure_a1",
            date: "September 14, 2016"
          },
          {
            id: uuid(),
            title: "Azure A2",
            name: "azure_a2",
            date: "September 14, 2016"
          },
          {
            id: uuid(),
            title: "Azure A3",
            name: "azure_a3",
            date: "September 14, 2016"
          },
          {
            id: uuid(),
            title: "Azure A5",
            name: "azure_a5",
            date: "September 14, 2016"
          },
          {
            id: uuid(),
            title: "Azure A6",
            name: "azure_a6",
            date: "September 14, 2016"
          },
          {
            id: uuid(),
            title: "Azure A7",
            name: "azure_a7",
            date: "September 14, 2016"
          },
        ]
      },
      {
        id: uuid(),
        name: "AWS",
        actions: [
          {
            id: uuid(),
            name: "AWS A1"
          },
          {
            id: uuid(),
            name: "AWS A2"
          },
          {
            id: uuid(),
            name: "AWS A3"
          }
        ]
      },
      {
        id: uuid(),
        name: "Xians Club",
        actions: [
          {
            id: uuid(),
            name: "Xians Club A1"
          },
          {
            id: uuid(),
            name: "Xians Club A2"
          },
          {
            id: uuid(),
            name: "Xians Club A3"
          }
        ]
      },

    ]
  },
  {
    id: uuid(),
    createdAt: '31/03/2020',
    year: '2020',
    initiatives: [
      {
        id: uuid(),
        name: "EL",
        actions: [
          {
            id: uuid(),
            name: "EL A1"
          },
          {
            id: uuid(),
            name: "EL A2"
          },
          {
            id: uuid(),
            name: "EL A3"
          }
        ]
      },
      {
        id: uuid(),
        name: "Financial Guidance",
        actions: [
          {
            id: uuid(),
            name: "Finacial A1"
          },
          {
            id: uuid(),
            name: "Finacial A2"
          },
          {
            id: uuid(),
            name: "Finacial A3"
          }
        ]
      },
      {
        id: uuid(),
        name: "Mobile Development",
        actions: [
          {
            id: uuid(),
            name: "Mobile A1"
          },
          {
            id: uuid(),
            name: "Mobile A2"
          },
          {
            id: uuid(),
            name: "Mobile A3"
          }
        ]
      },
    ]
  }

];
