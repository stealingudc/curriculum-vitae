import StackOverflowLogo from "@/assets/stackoverflow.svg";
import ReactLogo from "@/assets/react.svg";
import NextLogo from "@/assets/nextjs.svg";
import NestLogo from "@/assets/nestjs.svg";
import TailwindLogo from "@/assets/tailwind.svg";
import SassLogo from "@/assets/sass.svg";
import RadixLogo from "@/assets/radix.svg";
import NodeLogo from "@/assets/node.svg";
import AWSLogo from "@/assets/aws.svg";
import MongoLogo from "@/assets/mongodb.svg";
import MySQLLogo from "@/assets/mysql.svg";
import JavaScriptLogo from "@/assets/javascript.svg";
import TypeScriptLogo from "@/assets/typescript.svg";
import PHPLogo from "@/assets/php.svg";
import CPPLogo from "@/assets/cpp.svg";

function StackOverflow() {
  return <img src={StackOverflowLogo} />;
}

function React({ size }: { size?: number }) {
  return <img width={size} height={size} src={ReactLogo} />;
}

function NextJS({ size }: { size?: number }) {
  return <img className="invert" width={size} height={size} src={NextLogo} />;
}

function NestJS({ size }: { size?: number }) {
  return <img width={size} height={size} src={NestLogo} />;
}

function Tailwind({ size }: { size?: number }) {
  return <img width={size} height={size} src={TailwindLogo} />;
}

function Sass({ size }: { size?: number }) {
  return <img width={size} height={size} src={SassLogo} />;
}

function Radix({ size }: { size?: number }) {
  return <img className="invert" width={size} height={size} src={RadixLogo} />;
}

function Node({ size }: { size?: number }) {
  return <img width={size} height={size} src={NodeLogo} />;
}

function AWS({ size }: { size?: number }) {
  return <img width={size} height={size} src={AWSLogo} />;
}

function Mongo({ size }: { size?: number }) {
  return <img width={size} height={size} src={MongoLogo} />;
}

function MySQL({ size }: { size?: number }) {
  return <img width={size} height={size} src={MySQLLogo} />;
}

function JavaScript({ size }: { size?: number }) {
  return <img width={size} height={size} src={JavaScriptLogo} />;
}

function TypeScript({ size }: { size?: number }) {
  return <img width={size} height={size} src={TypeScriptLogo} />;
}

function PHP({ size }: { size?: number }) {
  return <img width={size} height={size} src={PHPLogo} />;
}

function CPP({ size }: { size?: number }) {
  return <img width={size} height={size} src={CPPLogo} />;
}

export {
  StackOverflow,
  React,
  NextJS,
  NestJS,
  Tailwind,
  Sass,
  Radix,
  Node,
  AWS,
  Mongo,
  MySQL,
  JavaScript,
  TypeScript,
  PHP,
  CPP,
};
