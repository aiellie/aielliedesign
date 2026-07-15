"use client"

import * as React from "react"

import { categories, components } from "@/lib/components"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"

export function NavComponents({
  ...props
}: React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <>
      {categories.map((category) => {
        const items = components.filter(
          (item) => item.category === category.name
        )
        if (items.length === 0) return null

        return (
          <SidebarGroup key={category.name} {...props}>
            <SidebarGroupLabel className="gap-2">
              <HugeiconsIcon icon={category.icon} strokeWidth={2} />
              <span>{category.name}</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      tooltip={item.name}
                      render={<a href={item.href} />}
                    >
                      <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )
      })}
    </>
  )
}
