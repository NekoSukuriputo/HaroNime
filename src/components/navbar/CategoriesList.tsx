"use client";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Fragment, createElement, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
  },
];

export default function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Categories
              <HiChevronDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <HiChevronDown
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}
