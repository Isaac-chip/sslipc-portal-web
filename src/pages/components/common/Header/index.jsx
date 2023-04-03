import Image from "next/image";
import { Navbar, Dropdown, Button, ListGroup, Accordion } from "flowbite-react";
import classNames from "classnames";
import LoginButton from "./login";

import Search from "./searchInput";

import { fakeData } from "@/pages/constants.js";

export default function Index() {
  return (
    <div className="container mx-auto">
      <Navbar className="justify-around" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <Image src="/LOGO.png" alt="me" width="294" height="49" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="flex">
            <Search className="cursor-pointer"></Search>
            <LoginButton className="cursor-pointer"></LoginButton>
          </div>
          <div className="md:hidden pt-10px">
            <Accordion alwaysOpen={true}>
              {Object.keys(fakeData).map((item,index) => {
                return (
                  <Accordion.Panel key={item+'-'+index}>
                    <Accordion.Title>{item}</Accordion.Title>
                    <Accordion.Content>
                      <div className={classNames("w-full flex flex-wrap")}>
                        {fakeData[item].map((subItem,index) => {
                          return (
                            <a
                              key={subItem+'-'+index}
                              href="https://flowbite.com/docs/getting-started/introduction/"
                              className="text-blue-600 hover:underline dark:text-blue-500 pr-20px"
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                );
              })}
            </Accordion>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
