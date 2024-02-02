import { client } from "./client";
import { serviceOverview } from "./query";

export async function getServiceData() {

    const data = await client.fetch(serviceOverview)
}