import load from "../pb/loader";

export const PharmacyClient = load({
	serviceName: "PharmacyService",
	address: "localhost:50051",
	fileName: "pharmacy",
});
