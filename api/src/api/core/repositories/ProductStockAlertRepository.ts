/*
 * spurtcommerce API
 * version 5.0.0
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { ProductStockAlert } from '../models/ProductStockAlert';

@EntityRepository(ProductStockAlert)
export class ProductStockAlertRepository extends Repository<ProductStockAlert>  {

}