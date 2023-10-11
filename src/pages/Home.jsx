import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/react";

import { Input, FormControl, Flex } from "@chakra-ui/react";
import { CardDayCleanScale } from "../components/CardDayClean";
import './../pages/Home.css'

export function Home() {
  //   const [womanGroup, setWomanGroup] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const [sorted, setSorted] = useState(false);
  // let [arraysDivididos, SetArraysDivididos] = useState([]);
  // const [womanGroup, setWomanGroup] = useState([]);
  const [womanGroup, setWomanGroup] = useState([
    // {woman: "Carina"},
    // {woman: "Talia"},
    // {woman: "Vanessa"},
    // {woman: "Rebecca"},
    // {woman: "Gih"},
    // {woman: "Lia"},
    // {woman: "Gabs"},
    // {woman: "Thabata"},
    // {woman: "Tati"},
    // {woman: "Any"},
    // {woman: "Gislaine"},
    // {woman: "Manu"},
    // {woman: "Ester"},
    // {woman: "Camponesa1"},
    // {woman: "Camponesa2"},
    // {woman: "Camponesa3"},
    // {woman: "Josi"},
    // {woman: "Ceiça"}
  ]);

  function shuffleArray() {
    setSorted(true);
    for (let i = womanGroup.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [womanGroup[i], womanGroup[j]] = [womanGroup[j], womanGroup[i]];
    }
    let arraysDivididos = divideArray(womanGroup);
    setThursday(arraysDivididos[0]);
    setFriday(arraysDivididos[1]);
    setSaturday(arraysDivididos[2]);
    setSunday(arraysDivididos[3]);

    console.log(arraysDivididos);
  }

  function divideArray(array) {
    const chunkSize = Math.ceil(array.length / 4);
    const dividedArrays = [];

    for (let i = 0; i < 4; i++) {
      const startIndex = i * chunkSize;
      const endIndex = startIndex + chunkSize;
      dividedArrays.push(array.slice(startIndex, endIndex));
    }

    return dividedArrays;
  }

  const onSubmit = (data) => {
    console.log(data);
    womanGroup.push(data);
    console.log(womanGroup);
    reset();

    // shuffleArray(womanGroup)
    // divideArray(womanGroup)
  };

  function reloadPage(){
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div
      style={{
        backgroundColor: "#000",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Flex
        marginTop={8}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img width={"100px"} src={"LOGO_BRANCO.png"} />
      </Flex>

      <form
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          width={"400px"}
          flexDirection={"row"}
          justifyContent="center"
          display={"flex"}
          marginTop={"16px"}
          alignItems={"center"}
          color="#fff"
          backgroundColor={"#000"}
          isInvalid={errors.woman}
        >
          {/* register your input into the hook by invoking the "register" function */}

          {/* include validation with required or other standard HTML validation rules */}
          <Input
            id="woman"
            placeholder="Adicionar nomes"
            {...register("woman", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.woman && <span>Campo vázio</span>}

          {/* <input type="submit" /> */}
          <Button width={60} marginLeft={8} type="submit">
            Adicionar
          </Button>
        </FormControl>
      </form>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={8}
      >
        {!sorted ? (
          <>
            <CardDayCleanScale title={"Todas as pessoas"} array={womanGroup} />
            <Button marginTop={8} width={100} onClick={() => shuffleArray()}>
              Sortear
            </Button>
          </>
        ) : (
          <>
            <span></span>
            <Button marginTop={8} width={100} onClick={() => reloadPage()}>
              Reiniciar
            </Button>
          </>
        )}
      </Flex>
      <Flex justifyContent={"center"} marginTop={8} className="Cards">
        {sorted ? (
          <>
            <CardDayCleanScale title={"Quinta-feira"} array={thursday} />
            <CardDayCleanScale title={"Sexta-feira"} array={friday} />
            <CardDayCleanScale title={"Sábado"} array={saturday} />
            <CardDayCleanScale title={"Domingo"} array={sunday} />
          </>
        ) : (
          <span></span>
        )}
      </Flex>
    </div>
  );
}
