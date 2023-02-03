import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
    constructor() {
        super();
    }

    override itemsPerPageLabel = 'Items por página';
    override nextPageLabel = 'Página siguiente';
    override previousPageLabel = 'Página antererior';
    override lastPageLabel = 'Ultima página' 
    override firstPageLabel = 'Primera página'

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
            return '0 de ${length}';
        }

        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        //return '${startIndex + 1} - ${endIndex} de ${lenght}';
        return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    }


}
