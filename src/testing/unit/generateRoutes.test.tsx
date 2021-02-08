import React from 'react';
import { MyRouteProps } from '../../shared/routes';
import { generateRoutes } from '../../shared/utils/funcs/generateRoutes';
import { describe, expect, it } from '@jest/globals';

describe('routes are generated correctly', () => {
  it('no nested routes', () => {
    const mock: MyRouteProps[] = [
      { strict: true, path: '/', component: () => <></> },
      { strict: true, path: '/sign-in', component: () => <></> },
    ];
    expect(generateRoutes(mock)).toEqual(mock);
  });

  it('simple nested routes', () => {
    const mock: MyRouteProps[] = [
      { strict: true, path: '/', component: () => <></> },
      {
        strict: true,
        path: '/s/:shopId',
        component: () => <></>,
        childs: [
          { strict: true, path: '/products', component: () => <></> },
          { strict: true, path: '/orders', component: () => <></> },
        ],
      },
    ];
    expect(JSON.stringify(generateRoutes(mock))).toBe(
      JSON.stringify([
        { strict: true, path: '/', component: () => <></> },
        {
          strict: true,
          path: '/s/:shopId',
          component: () => <></>,
        },
        { strict: true, path: '/s/:shopId/products', component: () => <></> },
        { strict: true, path: '/s/:shopId/orders', component: () => <></> },
      ])
    );
  });

  it('super nested routes', () => {
    const mock: MyRouteProps[] = [
      { strict: true, path: '/', component: () => <></> },
      {
        strict: true,
        path: '/s/:shopId',
        component: () => <></>,
        childs: [
          {
            strict: true,
            path: '/products',
            component: () => <></>,
            childs: [
              { strict: true, path: '/new', component: () => <></> },
              {
                strict: true,
                path: '/:productId',
                component: () => <></>,
                childs: [
                  {
                    strict: true,
                    path: '/edit',
                    component: () => <></>,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    expect(JSON.stringify(generateRoutes(mock))).toBe(
      JSON.stringify([
        { strict: true, path: '/', component: () => <></> },
        {
          strict: true,
          path: '/s/:shopId',
          component: () => <></>,
        },
        {
          strict: true,
          path: '/s/:shopId/products',
          component: () => <></>,
        },
        {
          strict: true,
          path: '/s/:shopId/products/new',
          component: () => <></>,
        },
        {
          strict: true,
          path: '/s/:shopId/products/:productId',
          component: () => <></>,
        },
        {
          strict: true,
          path: '/s/:shopId/products/:productId/edit',
          component: () => <></>,
        },
      ])
    );
  });
});
