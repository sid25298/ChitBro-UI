import { createServer } from "miragejs";

export function makeServer({ environment = 'test' }) {
    return createServer({
        environment,
        routes() {
            this.namespace = ""
            this.get("/dashboard", () => {
                return [
                    {
                        id: "1",
                        name: "Whatever",
                        amount: 100000,
                        duration: 36, //number of months
                        people_count: 7,
                        max_users: 10,
                        pool: 100,
                        amount_paid: 30
                    },
                    {
                        id: "2",
                        name: "Whatever",
                        amount: 100000,
                        duration: 36, //number of months
                        people_count: 7,
                        max_users: 10,
                        pool: 100,
                        amount_paid: 30
                    }
                ]
            })
            this.get("/marketplace", () => {
                return [
                    {
                        id: "1",
                        name: "ACME Chit",
                        amount: 100000,
                        duration: 36, //number of months
                        people_count: 7,
                        max_users: 10
                    },
                    {
                        id: "2",
                        name: "Savings Chit",
                        amount: 100000,
                        duration: 36, //number of months
                        people_count: 7,
                        max_users: 10
                    }
                ]

            })
            this.put("/marketplace", () => {
                return {
                    status: 200
                }

            })
            this.post("/marketplace", () => {
                return {
                    status: 200
                }

            })

            this.passthrough();
        }
    })
}