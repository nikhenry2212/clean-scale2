/* eslint-disable array-callback-return */
import { Card, CardBody, Text } from "@chakra-ui/react";

export function CardDayCleanScale({ title, array=[] }) {
  return (
    <div>
      <Card
          width={410}
          className=""
          // sx={{ minWidth: 275 }}
          style={{ marginTop: "2px", borderColor: "#fff", marginLeft: "8px" }}
      >
        <CardBody>
          <Text>{title}</Text>
            <hr />
           {
            array.map((woman, i) => (

              <Text key={i}>{woman.woman}</Text>
            )) 
          } 
        </CardBody>
      </Card>
    </div>
  );
}
