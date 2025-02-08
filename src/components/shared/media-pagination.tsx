import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Tooltip from "./tooltip";
interface MediaPaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

export default function MediaPagination({
  currentPage,
  totalPages,
  query,
}: MediaPaginationProps) {
  const renderPageNumbers = () => {
    let pagesToShow: number[] = [];

    if (totalPages <= 3) {
      // Show all pages if total pages are 3 or less
      pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage === 1) {
      // Show first 3 pages when on the first page
      pagesToShow = [1, 2, 3];
    } else if (currentPage === totalPages) {
      // Show last 3 pages when on the last page
      pagesToShow = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      // Show previous, current, and next page when in the middle
      pagesToShow = [currentPage - 1, currentPage, currentPage + 1];
    }

    return pagesToShow.map((page) => (
      <PaginationItem key={page}>
        <PaginationLink
          href={`/search?query=${query}&page=${page}`}
          className={cn({
            "border-2 border-green-500 text-green-500 font-bold":
              currentPage === page,
          })}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <Pagination className="my-4">
      <PaginationContent>
        {/* Show First Page button if not on the first page */}
        {currentPage > 1 && (
          <Tooltip content="First Page">
            <PaginationItem>
              <PaginationLink href={`/search?query=${query}&page=1`}>
                <ChevronsLeft />
              </PaginationLink>
            </PaginationItem>
          </Tooltip>
        )}

        {/* Show Previous button if not on the first page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/search?query=${query}&page=${currentPage - 1}`}
            />
          </PaginationItem>
        )}

        {/* Render page numbers */}
        {renderPageNumbers()}

        {/* Show Next button if not on the last page */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/search?query=${query}&page=${currentPage + 1}`}
            />
          </PaginationItem>
        )}

        {/* Show Last Page button if not on the last page */}
        {currentPage < totalPages && (
          <Tooltip content="Last Page">
            <PaginationItem>
              <PaginationLink
                href={`/search?query=${query}&page=${totalPages}`}
              >
                <ChevronsRight />
              </PaginationLink>
            </PaginationItem>
          </Tooltip>
        )}
      </PaginationContent>
    </Pagination>
  );
}
