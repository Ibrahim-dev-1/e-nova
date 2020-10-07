import React from "react";
import { FormattedMessage } from "react-intl";
import RadioGroup from "../../components/radio-group/radio-group";
import RadioCard from "../../components/radio-card/radio-card";
import { Button } from "../../components/button/button";
import UpdateAddress from "../../components/address-card/address-card";
import { handleModal } from "../../features/checkouts/checkout-modal";
import { CardHeader } from "../../components/card-header/card-header";
import { ButtonGroup } from "../../components/button-group/button-group";
import { Box } from "../../components/box";
import { Plus } from "../../assets/icons/PlusMinus";

interface Props {
  increment?: boolean;
  icon?: boolean;
  buttonProps?: any;
  flexStart?: boolean;
}

const Address = ({
  increment = false,
  flexStart = false,
  buttonProps = {
    size: "big",
    variant: "outlined",
    type: "button",
    className: "add-button",
  },
  icon = false,
}: Props) => {
  const handleOnDelete = async (item) => {
    console.log("click sur onDelete Item: ", item);
  };

  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id="checkoutDeliveryAddress"
          defaultMessage="Select Your Delivery Address"
        />
      </CardHeader>
      <ButtonGroup flexStart={flexStart}>
        <RadioGroup
          items={[]}
          component={(item: any) => (
            <RadioCard
              id={item.id}
              key={item.id}
              title={item.name}
              content={item.info}
              name="address"
              checked={item.type === "primary"}
              onChange={() => console.log("onChange function is emit")}
              onEdit={() => handleModal(UpdateAddress, item)}
              onDelete={() => handleOnDelete(item)}
            />
          )}
          secondaryComponent={
            <Button
              {...buttonProps}
              onClick={() => handleModal(UpdateAddress, "add-address-modal")}
            >
              {icon && (
                <Box mr={2}>
                  <Plus width="10px" />
                </Box>
              )}
              <FormattedMessage
                id="addAddressBtn"
                defaultMessage="Add Address"
              />
            </Button>
          }
        />
      </ButtonGroup>
    </>
  );
};
export default Address;
