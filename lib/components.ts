import type { IconSvgElement } from "@hugeicons/react"
import {
  Alert02Icon,
  AlertCircleIcon,
  AspectRatioIcon,
  Attachment01Icon,
  BadgeIcon,
  BorderHorizontalIcon,
  Bot,
  BrainIcon,
  BubbleChatIcon,
  Calendar01Icon,
  CarouselHorizontalIcon,
  ChartHistogramIcon,
  CommandIcon,
  CreditCardIcon,
  CursorInWindowIcon,
  CursorPointer01Icon,
  CursorRectangleSelection01Icon,
  CustomFieldIcon,
  DashedLine01Icon,
  DragDropVerticalIcon,
  FileEmpty01Icon,
  GridTableIcon,
  GroupItemsIcon,
  InformationCircleIcon,
  InputTextIcon,
  KeyboardIcon,
  LabelIcon,
  Layout02Icon,
  LeftToRightListBulletIcon,
  Loading01Icon,
  Loading03Icon,
  Menu01Icon,
  Menu05Icon,
  Menu08Icon,
  MenuCollapseIcon,
  Message01Icon,
  MessageNotification01Icon,
  MoreHorizontalCircle01Icon,
  MouseScroll01Icon,
  Navigation01Icon,
  NoteIcon,
  PasswordValidationIcon,
  PinLocation01Icon,
  RadioButtonIcon,
  Search01Icon,
  SidebarBottomIcon,
  SidebarLeftIcon,
  SlidersHorizontalIcon,
  SquareIcon,
  Tag01Icon,
  TextAlignLeftIcon,
  TextIndentIcon,
  Tick02Icon,
  ToggleOnIcon,
  TranslateIcon,
  UnfoldMoreIcon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons"

export type ComponentCategory =
  | "AI"
  | "Forms"
  | "Layout"
  | "Navigation"
  | "Overlays"
  | "Feedback"
  | "Data Display"
  | "Chat"

export type ComponentItem = {
  name: string
  href: string
  category: ComponentCategory
  icon: IconSvgElement
}

export const components: ComponentItem[] = [
  {
    name: "Model Card",
    href: "/components/model-card",
    category: "AI",
    icon: Bot,
  },
]

export const categories: {
  name: ComponentCategory
  icon: IconSvgElement
}[] = [
  { name: "AI", icon: BrainIcon },
  { name: "Forms", icon: InputTextIcon },
  { name: "Layout", icon: Layout02Icon },
  { name: "Navigation", icon: Navigation01Icon },
  { name: "Overlays", icon: CursorInWindowIcon },
  { name: "Feedback", icon: Alert02Icon },
  { name: "Data Display", icon: GridTableIcon },
  { name: "Chat", icon: Message01Icon },
]
