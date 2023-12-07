import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponents from "./ErrorComponents";
import CoinCard from "./CoinCard";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const btn = new Array(132).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setLoading(false);
        setCoins(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
    return () => {};
  }, [currency, page]);

  if (error)
    return <ErrorComponents message={"Error while featching the Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* "inr" ? "₹" : currency === "eur" ? "€" : "$"; */}
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value="inr"> INR </Radio>
              <Radio value="usd"> USD </Radio>
              <Radio value="eur"> EUR </Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                symbol={i.symbol}
                img={i.image}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflow={"auto"} p={"8"}>
            {btn.map((items, index) => (
              <Button
                key={index}
                bg={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coin;
