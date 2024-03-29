const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include: [{model: Product}]
    });
    res.status(200).json(tagsData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })

    if(!tag) {
      res.status(404).json({ message: 'No tag found with that id'});
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }) 
  .then(tag => res.json(tag))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }) 
  .then(tag => res.json(tag))
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tag =  await Tag.destroy({
      where:{
        id: req.params.id
      }
    });

    if (!tag){
      res.status(404).json({ message: 'No tag found with this id'})
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
