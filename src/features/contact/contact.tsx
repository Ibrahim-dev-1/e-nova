import React from "react";
import { FormattedMessage } from "react-intl";

// components import
import { Box } from "../../components/box";
import { CardHeader } from "../../components/card-header/card-header";
import { ButtonGroup } from "../../components/button-group/button-group";
import RadioGroup from "../../components/radio-group/radio-group";
import RadioCard from "../../components/radio-card/radio-card";
import { Button } from "../../components/button/button";
import { handleModal } from "../checkouts/checkout-modal";
import CreateOrUpdateContact from "../../components/contact-card/contact-card";

import { Plus } from "../../assets/icons/PlusMinus";

interface Props {
  increment?: boolean;
  flexStart?: boolean;
  icon?: boolean;
  buttonProps?: any;
}

const Contact: React.FC<Props> = ({
  increment = false,
  flexStart = false,
  icon = false,
  buttonProps = {
    size: "big",
    variant: "outlined",
    type: "button",
    className: "add-button",
  },
}) => {
  const [contact, setContact] = React.useState(["97-58-48-36"]);
  const handleOnDelete = async (item) => {
    return console.log("delete item: ", item);
  };

  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id="contactNumberText"
          defaultMessage="Select Your Contact Number"
        />
      </CardHeader>
      <ButtonGroup flexStart={flexStart}>
        <RadioGroup
          items={contact}
          component={(item: any) => (
            <RadioCard
              id={item.id}
              key={item.id}
              title={item.type}
              content={item.number}
              checked={item.type === "primary"}
              onChange={() => console.log("set primary contact")}
              name="contact"
              onEdit={() => handleModal(CreateOrUpdateContact, item)}
              onDelete={() => handleOnDelete(item)}
            />
          )}
          secondaryComponent={
            <Button
              {...buttonProps}
              onClick={() =>
                handleModal(CreateOrUpdateContact, "add-contact-modal")
              }
            >
              {icon && (
                <Box mr={2}>
                  <Plus width="10px" />
                </Box>
              )}
              <FormattedMessage
                id="addContactBtn"
                defaultMessage="Add Contact"
              />
            </Button>
          }
        />
      </ButtonGroup>
    </>
  );
};

export default Contact;
