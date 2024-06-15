import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowUp,
  ArrowUp01Icon,
  ArrowUpIcon,
  ChevronsUpDown,
  EyeOff,
} from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="data-[state=open]:bg-accent -ml-3 h-8"
          >
            <span className="text-lg dark:text-white">{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4 dark:text-white " />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4 dark:text-white" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4 dark:text-white" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className=" border-stroke bg-white dark:border-strokedark  dark:bg-form-input"
        >
          <DropdownMenuItem
            className="text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-meta-4"
            onClick={() => column.toggleSorting(false)}
          >
            <ArrowUpIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-meta-4"
            onClick={() => column.toggleSorting(true)}
          >
            <ArrowDownIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-meta-4"
            onClick={() => column.toggleVisibility(false)}
          >
            <EyeOff className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
