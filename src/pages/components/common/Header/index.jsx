import Link from "next/link";
import Image from "next/image";
import { Navbar, Dropdown, Button, ListGroup, Accordion } from "flowbite-react";
import Head from "next/head";
import classNames from "classnames";
import LoginButton from "./login";

import Search from "./searchInput";

import { fakeData } from "../../../../constants/index";

export default function Index() {
  return (
    <div style={{background:"#FFFFFF"}}>
       <Head>
        <title>东莞松山湖科学城知识产权</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <div className="container mx-auto">
      <Navbar className="justify-around" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <Image src="/LOGO@2x.png" alt="me" width="294" height="49" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="flex">
            <Search className="cursor-pointer"></Search>
            <LoginButton className="cursor-pointer"></LoginButton>
          </div>
          <div className="md:hidden pt-10px">
            <Accordion alwaysOpen={true}>
              {Object.keys(fakeData)?.map((item,index) => {
                return (
                  <Accordion.Panel key={item+'-'+index}>
                    <Accordion.Title>{item}</Accordion.Title>
                    <Accordion.Content>
                      <div className={classNames("w-full flex flex-wrap")}>
                        {fakeData[item]?.map((subItem,index) => {
                          return (
                            <Link
                              key={subItem.label+'-'+index}
                              href={subItem.router}
                              className="text-blue-600 hover:underline dark:text-blue-500 pr-20px"
                            >
                              {subItem.label}
                            </Link>
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
    </div>

  );
}
