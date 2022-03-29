import React from 'react'
import { Drawer } from '@mui/material'
import { ListItem, List, ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'



const DrawerComponent = ({openDrawer, setOpenDrawer}) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
        <List>
            <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        Categorías
                    </ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        Ofertas
                    </ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        Nosotros
                    </ListItemText>
                </ListItemIcon>
            </ListItem>
            <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        FAQ´s
                    </ListItemText>
                </ListItemIcon>
            </ListItem>
        </List>
    </Drawer>
  )
}

export default DrawerComponent;