import { gql } from "apollo-server";

export default gql`
  type Query {
    myReservation_member: [Reservation]
  }
`;