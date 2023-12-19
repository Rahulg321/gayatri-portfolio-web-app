import React from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="border border-md p-4 ">
      <form action="" className="flex flex-col gap-6">
        <Input
          isRequired
          type="text"
          label="Name"
          placeholder="John Doe...."
          labelPlacement="outside"
          startContent={<IoMdPerson />}
        />
        <Input
          isRequired
          type="number"
          label="Mobile Number"
          placeholder="+91 9803239930"
          labelPlacement="outside"
          startContent={<FaPhoneAlt />}
        />
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={<MdOutlineEmail />}
        />
        <Textarea
          isRequired
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your message"
          className="max-w"
        />
        <Button>Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
